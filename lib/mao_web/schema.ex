defmodule MAOWeb.Schema do
  @moduledoc false

  use Absinthe.Schema
  use Absinthe.Relay.Schema, :modern

  import_types(__MODULE__.Wall)
  import_types(__MODULE__.Replies)
  import_types(Absinthe.Type.Custom)

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

    field :is_healthy, non_null(:boolean) do
      resolve(fn _, _ -> {:ok, true} end)
    end

    import_fields(:wall_queries)
  end

  mutation do
    import_fields(:wall_mutations)
    import_fields(:replies_mutations)
  end

  subscription do
    import_fields(:replies_subscription)
  end

  def context(context) do
    loader =
      Dataloader.new()
      |> Dataloader.add_source(MAO.Wall, MAO.Wall.data())

    Map.put(context, :loader, loader)
  end

  def plugins do
    [Absinthe.Middleware.Dataloader] ++ Absinthe.Plugin.defaults()
  end
end
