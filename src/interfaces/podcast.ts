export interface Podcast {
  id: { attributes: { 'im:id': string } };
  'im:name': { label: string };
  'im:image': [{ label: string }, { label: string }, { label: string }];
  summary: { label: string };
  title: {
    id?: number;
    label: string;
  };
  'im:artist': { label: string };
}
