defmodule MAO.Wall do
  @moduledoc false

  import Ecto.Query

  alias MAO.Repo
  alias MAO.Wall.Post

  def create_post(attrs) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end

  def list_posts do
    Repo.all(Post)
  end

  def posts_query(args), do: posts_query(Post, args)

  def posts_query(query, args) do
    Enum.reduce(args, query, fn
      {:order, :newest}, query ->
        query |> order_by(desc: :inserted_at, desc: :id)

      _, query ->
        query
    end)
  end

  def get_post(id) do
    Repo.get(Post, id)
  end

  def data do
    Dataloader.Ecto.new(Repo)
  end
end
