defmodule MAO.Factory do
  @moduledoc false

  use ExMachina.Ecto, repo: MAO.Repo

  def post_factory do
    %MAO.Wall.Post{
      content: "I am the first line.\n I am the second line."
    }
  end
end
