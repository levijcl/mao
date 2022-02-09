defmodule MAOWeb.PageController do
  use MAOWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
