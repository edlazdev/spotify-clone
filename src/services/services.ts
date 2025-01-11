export function getPlayListInfoById(playListId: string | number) {
  return fetch(`/api/get-info-playlist?id=${playListId}`).then((res) =>
    res.json()
  );
}
