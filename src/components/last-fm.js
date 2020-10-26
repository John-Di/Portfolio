import React, { useState, useEffect } from 'react';
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";

export default function Education({ userName, apiKey }) {
	const [lfmData, updateLfmData] = useState({});

	const getCurrentTrack = () => {
		fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('error');
			})
			.then(data => updateLfmData(data))
			.catch(() =>
				updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
			);
	};

	useEffect(() => {
		getCurrentTrack();
		setInterval(getCurrentTrack, 240000);
	}, []);

	const buildLastFmData = () => {
		const { error } = lfmData;
		const track = lfmData?.recenttracks?.track;

		if (error) {
			return <p>{error}</p>;
		}

		if (!track) {
			return <p>Loading</p>;
		}

		console.log(lfmData);

		const [
			{ name: songName, artist: { '#text': artistName } = {} } = {}
		] = track;

		return <h3 css={css`
			margin: ${rhythm(0.5)} auto;
		`}>
			<span css={css`
				margin-right: ${rhythm(0.5)};
				position: relative;
			`}>
				<FontAwesomeIcon icon={faHeadphonesAlt} color="#49586d" css={css`
					height: 100%;
					width: 100%;
				`} />
			</span>
			<span>{songName}</span> <span>by {artistName}</span>
		</h3>;
	};

	return buildLastFmData();
};
