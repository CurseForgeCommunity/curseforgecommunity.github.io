import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./games.module.css";
import GamesInformation, { AppWeb, GameInfoItem, OperatingSystem } from "../components/games.information";


function GameInformation(game: GameInfoItem) {
	return (
		<>
			<tr>
				<td style={{ verticalAlign: "middle" }}>{game.avatarUrl ? <img src={game.avatarUrl} width={32} /> : game.image ? <img src={game.image} width={32} /> : null}</td>
				<td>{game.name}</td>
				<td>{game.appWeb?.map(i => i.toString()).sort().join(", ") ?? AppWeb.Unknown}</td>
				<td>{game.os?.map(i => i.toString()).sort().join(", ") ?? OperatingSystem.Unknown}</td>
				<td dangerouslySetInnerHTML={{ __html: game.info }}></td>
			</tr>
		</>
	);
}

export default function Home(): JSX.Element {
	let sortedGames = GamesInformation.slice();
	sortedGames =
		sortedGames.sort((a, b) => {
			const removeThePrefix = (name: string): string => name.replace(/^the /i, "").trim();

			// Check if appWeb exists and is not null
			const aHasAppWeb = a.appWeb && a.appWeb.length > 0;
			const bHasAppWeb = b.appWeb && b.appWeb.length > 0;

			// If both have appWeb or both don't have appWeb, sort by name
			if (aHasAppWeb === bHasAppWeb) {
				return removeThePrefix(a.name).localeCompare(removeThePrefix(b.name));
			}

			// If only a has appWeb, a should come first
			if (aHasAppWeb) {
					return -1;
			}

			// If only b has appWeb, b should come first
			return 1;
		});

	let printedSeparator = false;

  return (
    <Layout
      title="CurseForge Games Information"
      description="Information about all games available with CurseForge">
      <main>
				<section>
					<div className="container">
						<div className="row">
							<div className={clsx("col col--12")}>
								<h1>CurseForge Games</h1>
								<p>Find information about the games supported by CurseForge, and if they are available through any of the apps, or only through the website.</p>
								<p>If we are missing some data, or if something is wrong, please <a href="https://github.com/CurseForgeCommunity/curseforgecommunity.github.io/issues/new?assignees=&labels=game-info&projects=&template=game-info.md&title=Invalid+game+info%3A+%3Cname+here%3E" target="_blank">open an issue here</a></p>
							</div>
						</div>
						<div className="row">
							<table className={styles.gameTable}>
								<thead>
									<tr>
										<th></th>
										<th>Game</th>
										<th><abbr title="Can this game be used in the app or only through the website?">App/Web</abbr></th>
										<th><abbr title="Operating system (Windows, Linux, Mac)">OS</abbr></th>
										<th>Additional information</th>
</tr>
								</thead>
								<tbody>
									{sortedGames.map((props, idx) => (
										<>
											{!printedSeparator && (props.appWeb ?? []).length === 0 && (printedSeparator = true) && (<tr><td colSpan={5} style={{textAlign: "center"}}><i>Games that we do not have data on yet</i></td></tr>)}
									<GameInformation key={idx} {...props} />
								</>
							))}
									</tbody>
								</table>
						</div>
					</div>
					</section>
      </main>
    </Layout>
  );
}
