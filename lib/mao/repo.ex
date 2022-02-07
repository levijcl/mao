defmodule MAO.Repo do
  use Ecto.Repo,
    otp_app: :mao,
    adapter: Ecto.Adapters.Postgres
end
