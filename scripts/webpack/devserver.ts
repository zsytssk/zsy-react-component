import * as path from "path";
import { Configuration } from "webpack";

export const devServerConfigFn = (mode: Configuration["mode"]) => {
  return {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    compress: true,
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 4000,
    allowedHosts: [".local.devbitgame.com"],
  };
};
