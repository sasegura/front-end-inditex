import { TestWrapper } from "../../utils/test/test";
import EpisodePlayer from "./episodePlayer";
import { screen, render, waitFor, act } from '@testing-library/react';

const props = {
  "episodeName": "Episode 369 w/ Ginuwine",
  "episodeDescription": "In this episode the Champs chop it up with the legendary, Genuine!Ginuwine shares his journey! Ginuwine shares stories of Aaliyah, Timbaland Missy Misdemeanor Elliott and more!",
  "episodeAudio": "https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/6b443fa6-876a-431e-a2ad-b02a00e52b3c/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d"
}

describe('Episode player', () => {
  beforeEach(() => {

    render(
      <TestWrapper>
        <EpisodePlayer
          episodeName={props.episodeName}
          episodeDescription={props.episodeDescription}
          episodeAudio={props.episodeAudio} />
      </TestWrapper>
    );
  });

  test('shows the title', () => {
    const audioTitle = screen.getByText(props.episodeName);
    expect(audioTitle).toBeInTheDocument();
  });

  test("shows the description", () => {
    const audioDescription = screen.queryByText(props.episodeDescription);
    expect(audioDescription).toBeInTheDocument();
  });

})