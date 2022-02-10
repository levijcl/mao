defmodule MAO.Repo.Migrations.AddPosts do
  use Ecto.Migration

  def change do
    create table("posts") do
      add :content, :string, null: false, size: 500
      add :reply_id, references(:posts)

      timestamps()
    end
  end
end
