defmodule MAOWeb.Schema do
  @moduledoc false

  use Absinthe.Schema
  use Absinthe.Relay.Schema, :modern

  node interface do
    resolve_type(fn
      _, _ ->
        nil
    end)
  end

  query do
    node field do
      resolve(fn
        _, _ ->
          {:error, "Unknown node"}
      end)
    end

    field :hello_world, non_null(:string) do
      resolve(fn _, _ -> {:ok, "Hello World"} end)
    end
  end
end

