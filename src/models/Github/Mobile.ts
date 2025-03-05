export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface Release {
  name: string;
  tag_name: string;
  published_at: string;
  html_url: string;
  assets: ReleaseAsset[];
}
