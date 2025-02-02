declare function createUnityInstance(
  canvas: HTMLCanvasElement,
  config: {
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
    streamingAssetsUrl: string;
    companyName: string;
    productName: string;
    productVersion: string;
    devicePixelRatio?: number;
  },
  progressCallback: (progress: number) => void,
): Promise<{
  SetFullscreen: (value: number) => void;
  Quit: () => void;
}>;
