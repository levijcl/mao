defmodule MAO.Wall do

  alias MAO.Repo
  alias MAO.Wall.Post

  def create_post(attrs) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end
end
