defmodule MAOWeb.SchemaCase do
  @moduledoc false

  use ExUnit.CaseTemplate

  alias Ecto.Adapters.SQL

  using do
    quote do
      # Import conveniences for testing with connections
      import Absinthe.Relay.Node, only: [to_global_id: 2, from_global_id: 2]
      import Plug.Conn
      import Phoenix.ConnTest, except: [connect: 2]
      import MAOWeb.ConnCase

      alias MAOWeb.Router.Helpers, as: Routes

      # The default endpoint for testing
      @endpoint MAOWeb.Endpoint

      def post_query(conn, query, variables \\ %{}) do
        post(conn, "/api", %{"query" => query, "variables" => variables})
      end

      def assert_data(conn, field_name, data) do
        assert json_response(conn, 200) == %{
                 "data" => %{
                   field_name => %{"successful" => true, "messages" => [], "result" => data}
                 }
               }
      end

      def assert_error(conn, field_name, module) do
        %{code: code} = module.new()

        assert json_response(conn, 200) == %{
                 "data" => %{
                   field_name => %{
                     "successful" => false,
                     "messages" => [%{"code" => code}],
                     "result" => nil
                   }
                 }
               }
      end
    end
  end

  setup tags do
    :ok = SQL.Sandbox.checkout(MAO.Repo)

    unless tags[:async] do
      SQL.Sandbox.mode(MAO.Repo, {:shared, self()})
    end

    {:ok, conn: Phoenix.ConnTest.build_conn()}
  end
end
