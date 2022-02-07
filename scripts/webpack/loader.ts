import { Configuration } from "webpack";

export const fileLoader = {
  test: /\.(png|jpg|svg|gif)$/,
  exclude: /node_modules/,
  use: ["file-loader"],
};

export const lessLoaderFn = (mode: Configuration["mode"]) => {
  return {
    test: /(\.css|\.less)$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          sourceMap: mode === "development",
          modules: true,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            /* eslint-disable-next-line */
            plugins: [require("autoprefixer")()],
          },
        },
      },
      {
        loader: "less-loader",
        options: {
          sourceMap: mode === "development",
        },
      },
    ],
  };
};
export const cssLoaderFn = (mode: Configuration["mode"]) => {
  return {
    test: /(\.css)$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          sourceMap: mode === "development",
          modules: false,
        },
      },
    ],
  };
};

export const tsLoaderFn = (mode: Configuration["mode"]) => {
  const default_config = {
    test: /(\.ts|\.tsx|\.jsx|\.js)$/,
    exclude: [/\bnode_modules\b/],
    use: [
      {
        loader: "babel-loader",
      },
    ],
  } as any;

  return default_config;
};
