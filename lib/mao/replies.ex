defmodule MAO.Replies do
  @moduledoc false

  alias MAO.{Repo, Wall}

  def list_comments(%Wall.Post{} = post) do
    Repo.preload(post, :comments).comments
  end

  def create_comment(attrs) do
    %Wall.Post{}
    |> Wall.Post.changeset(attrs)
    |> Repo.insert()
  end
end
