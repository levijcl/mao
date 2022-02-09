defmodule MAO.WallTest do
  use MAO.DataCase

  import MAO.Factory

  alias MAO.Wall

  describe "create_post/1" do
    test "creates a post successfully" do
      content = "content"

      assert {:ok, %Wall.Post{content: ^content}} = Wall.create_post(%{content: content})
    end

    test "with invalid content" do
      content = String.duplicate("a", 501)

      assert {:error, %Ecto.Changeset{}} = Wall.create_post(%{content: content})
    end
  end

end
