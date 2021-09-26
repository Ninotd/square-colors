class Api::V1::ColorsController < ApplicationController

  def index
    colors = Color.order("created_at desc").limit(10)
    render json: colors
  end

  def create
    color = Color.create(color_params)
    colors = Color.order("created_at desc").limit(10)
    if color.save
        render json: colors, status: 201
    else
        render json: {errors: color.errors}, status: 422
    end
  end

  private

  def color_params
    params.require(:color).permit(:colorcode)
  end
end
