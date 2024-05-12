import React from "react";

export type GameInfoItem = {
	id: number;
	name: string;
	image: string;
	avatarUrl: string;
	appWeb?: AppWeb[];
	os?: OperatingSystem[];
	info?: JSX.Element;
}

export enum AppWeb {
	Web = "Web",
	Standalone = "Standalone",
	OverwolfApp = "Overwolf App",
	InGame = "In-Game",
	Unknown = "Unknown"
}

export enum OperatingSystem {
	Windows = "Windows",
	Linux = "Linux",
	Mac = "Mac",
	Xbox = "Xbox",
	PlayStation = "PlayStation",
	Unknown = "Unknown"
}

const GamesInformation : GameInfoItem[] = [
	{
		id: 432,
		name: "Minecraft",
		image: "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-285x380.jpg",
		avatarUrl: "https://media.forgecdn.net/avatars/652/748/638054969446166748.png",
		appWeb: [AppWeb.Standalone, AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows, OperatingSystem.Linux, OperatingSystem.Mac],
		"info": <>Does not behave well with Microsoft Gamepass</>
	},
	{
		"id": 65,
		"name": "StarCraft II",
		"image": "https://media.forgecdn.net/game-tiles/StarCraft+II+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/756/638054971315935359.png",

	},
	{
		"id": 64,
		"name": "The Secret World",
		"image": "https://media.forgecdn.net/game-tiles/tsw.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/760/638054972345226215.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 4593,
		"name": "Final Fantasy XV",
		"image": "https://media.forgecdn.net/game-box-art/4593_d0ce595c-ffde-4ef6-a734-051917f0a732.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/810/300/638181947470265030.png"
	},
	{
		"id": 69271,
		"name": "Minecraft Dungeons",
		"image": "https://media.forgecdn.net/game-tiles/minecraft-dungeons.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/749/638054969632688688.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 80345,
		"name": "Dwerve",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/f1e5ea74-2e6c-4873-be61-3fcbfdd2c972.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/591/603/637962707596791305.png"
	},
	{
		"id": 66004,
		"name": "Starfield",
		"image": "https://media.forgecdn.net/game-box-art/66004_af3383fa-1716-4f62-be04-26c70bc937be.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/862/875/638271731220060882.png"
	},
	{
		"id": 78018,
		"name": "osu!",
		"image": "https://media.forgecdn.net/game-tiles/osu.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/750/638054969797838185.png"
	},
	{
		"id": 646,
		"name": "Fallout 4",
		"image": "https://media.forgecdn.net/game-tiles/fallout-4.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/744/638054968700723608.png"
	},
	{
		"id": 73492,
		"name": "Kerbal Space Program 2",
		"image": "https://media.forgecdn.net/game-box-art/73492_c3aa04ff-bec2-4b82-86ab-ca86915fd396.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/777/919/638121496998142658.png"
	},
	{
		"id": 72430,
		"name": "Watch Dogs Legion",
		"image": "https://media.forgecdn.net/game-box-art/72430_4646e72b-9575-4d3a-8679-94448e3d7473.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/553/496/637894185157386317.png"
	},
	{
		"id": 83454,
		"name": "Star Wars Jedi Survivor",
		"image": "https://media.forgecdn.net/game-box-art/83454_a74f0f27-2361-4fca-a747-ec42b679a531.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/32/638155871377903623.png"
	},
	{
		"id": 6351,
		"name": "Mario Party 3",
		"image": "https://media.forgecdn.net/game-box-art/6351_396c8697-e44c-4327-a92c-d8d7bae87690.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/832/385/638223328928872194.png"
	},
	{
		"id": 727,
		"name": "Sid Meier's Civilization VI",
		"image": "https://media.forgecdn.net/game-tiles/civilization-6.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/740/638054967355252694.png"
	},
	{
		"id": 78017,
		"name": "Dyson Sphere Program",
		"image": "https://media.forgecdn.net/game-tiles/dyson-sphere-program.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/341/135/637483823201039296.png"
	},
	{
		"id": 78019,
		"name": "Loop Hero",
		"image": "https://media.forgecdn.net/game-tiles/loop-hero.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/352/5/637507030455736482.png"
	},
	{
		"id": 78022,
		"name": "Minecraft Bedrock",
		"image": "https://media.forgecdn.net/game-tiles/minecraft.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/316/638053973637065420.png"
	},
	{
		"id": 78023,
		"name": "Timber and Stone",
		"image": "https://gamestracker.org/_ld/109/10976.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/759/638054971844731915.png"
	},
	{
		"id": 78062,
		"name": "The Sims 4",
		"image": "https://media.forgecdn.net/game-tiles/Sims+4+Tile.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/315/638053972646247897.png",
		appWeb: [AppWeb.Standalone, AppWeb.Web, AppWeb.OverwolfApp],
		os: [OperatingSystem.Windows, OperatingSystem.Mac]
	},
	{
		"id": 78135,
		"name": "Demeo",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/eaf07d14-8695-4f69-bd0c-78af44f94b4c.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/468/250/637751406649699690.png"
	},
	{
		"id": 78163,
		"name": "Astro Colony",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/9d62cdd4-285f-4211-85cd-75864b8eb670.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/738/638054966690576901.png"
	},
	{
		"id": 78496,
		"name": "Hero's Hour",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/23dbcced-b587-40d2-8a61-e5c61adbd7e0.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/813/956/638188908760737515.png"
	},
	{
		"id": 80016,
		"name": "Mario Party",
		"image": "https://media.forgecdn.net/game-box-art/80016_b50d7d7a-6055-4e3a-a8fd-f6624d19f183.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/832/365/638223290755614364.png"
	},
	{
		"id": 80214,
		"name": "Spider-Man Remastered",
		"image": "https://media.forgecdn.net/game-box-art/80214_0b4b112a-145e-4432-a0d4-d9971cc1c37c.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/755/638054971128354585.png"
	},
	{
		"id": 81975,
		"name": "LEAP",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/c451f93f-984d-4999-9e17-2226fb585334.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/640/29/638041271386728785.png"
	},
	{
		"id": 82047,
		"name": "Oaken",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/8aa46d69-558b-483c-88c6-99ef16a77e35.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/637/492/638040456650718198.png"
	},
	{
		"id": 82203,
		"name": "Conquer Online",
		"image": "https://media.forgecdn.net/game-box-art/82203_173e1bb2-caef-4dcb-a2e5-2a5e4369d25a.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/798/17/638159578481828194.png"
	},
	{
		"id": 83357,
		"name": "River City Girls 2",
		"image": "https://media.forgecdn.net/game-box-art/83357_1c4e4693-c6fd-4306-93bd-c4c75d48fde3.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/777/923/638121504952212695.png"
	},
	{
		"id": 83372,
		"name": "The Settlers: New Allies",
		"image": "https://media.forgecdn.net/game-box-art/83372_aa5eba22-2f1c-43bb-805e-ca97c6cc2798.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/780/500/638125881162863709.png"
	},
	{
		"id": 83374,
		"name": "ARK Survival Ascended",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/ebb32c51-bda5-419c-8ac5-663b02598084.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/858/778/638264250839731334.png",
		os: [OperatingSystem.Windows, OperatingSystem.PlayStation, OperatingSystem.Xbox],
		appWeb: [AppWeb.InGame],
		info: <>Modding is done from in-game only.</>
	},
	{
		"id": 83387,
		"name": "Wild Hearts",
		"image": "https://media.forgecdn.net/game-box-art/83387_84b1c89b-733a-4094-bd36-f976765f9684.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/783/687/638131883823044612.png"
	},
	{
		"id": 83388,
		"name": "Company of Heroes 3",
		"image": "https://media.forgecdn.net/game-box-art/83388_d0edefea-a098-43ff-98d7-9b1a755c6362.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/783/695/638131888835880785.png"
	},
	{
		"id": 83431,
		"name": "Wo Long Fallen Dynasty",
		"image": "https://media.forgecdn.net/game-box-art/83431_7fe2b19d-c607-4602-b6b8-ab86e21e38f0.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/790/427/638145858892250019.png"
	},
	{
		"id": 83432,
		"name": "Resident Evil 4 Remake",
		"image": "https://media.forgecdn.net/game-box-art/83432_c6f22708-7967-439a-911e-472b2f169348.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/790/448/638145866351058890.png"
	},
	{
		"id": 83444,
		"name": "WorldBox - God Simulator",
		"image": "https://media.forgecdn.net/game-box-art/83444_ab32bf79-bbad-408f-b91b-2716c20fdcac.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/792/181/638149069838549803.png"
	},
	{
		"id": 83445,
		"name": "V Rising",
		"image": "https://media.forgecdn.net/game-box-art/83445_59cd0df9-92c1-4590-959f-9306b4136e29.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/792/684/638149954983943205.png"
	},
	{
		"id": 83452,
		"name": "Crime Boss: Rockay City",
		"image": "https://media.forgecdn.net/game-box-art/83452_258c5d69-4cdb-4a2c-8711-ba9bf0488a9e.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/15/638155854691369224.png"
	},
	{
		"id": 83453,
		"name": "Minecraft Legends",
		"image": "https://media.forgecdn.net/game-box-art/83453_3666cf98-4e87-4206-9fe9-46d5e490e036.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/16/638155857198979824.png"
	},
	{
		"id": 83457,
		"name": "Redfall",
		"image": "https://media.forgecdn.net/game-box-art/83457_98b0a2f1-d0ba-40c4-a9ba-6f056635e1d0.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/501/638156733343035668.png"
	},
	{
		"id": 83461,
		"name": "Darkest Dungeon II",
		"image": "https://media.forgecdn.net/game-box-art/83461_f3a99fd8-5b80-41ae-8faa-907d58b63d3d.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/643/638157025363494516.png"
	},
	{
		"id": 83462,
		"name": "Endless Dungeon",
		"image": "https://media.forgecdn.net/game-box-art/83462_c87998e3-99ef-4746-9b82-a1356b495b14.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/651/638157031015937085.png"
	},
	{
		"id": 83463,
		"name": "Suicide Squad: Kill the Justice League",
		"image": "https://media.forgecdn.net/game-box-art/83463_d09564e0-072f-4967-9cfa-08b449f59514.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/657/638157034045226097.png"
	},
	{
		"id": 83634,
		"name": "Age of Wonders 4",
		"image": "https://media.forgecdn.net/game-box-art/83634_443ee334-e113-42a4-bcd0-19fb122c5fc8.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/812/602/638186253706079500.png"
	},
	{
		"id": 83644,
		"name": "Starship Troopers: Extermination",
		"image": "https://media.forgecdn.net/game-box-art/83644_8aa3cf57-2f81-4bf2-8753-5ff469b3c9da.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/813/412/638187958674631959.png"
	},
	{
		"id": 83645,
		"name": "Terra Nil",
		"image": "https://media.forgecdn.net/game-box-art/83645_82c23cd7-3781-4ed9-a4fc-59073f86fdc6.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/813/433/638187979353957449.png"
	},
	{
		"id": 83647,
		"name": "Brinefall",
		"image": "https://media.forgecdn.net/game-box-art/83647_49fa2f9f-a969-4eb1-8ca1-e6daaf4d3a74.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/813/459/638187994049346597.png"
	},
	{
		"id": 83648,
		"name": "Spiritfall",
		"image": "https://media.forgecdn.net/game-box-art/83648_e7788d56-ed3f-49a0-a850-09febc5aaf3c.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/813/486/638188007582128223.png"
	},
	{
		"id": 83649,
		"name": "Meet Your Maker",
		"image": "https://media.forgecdn.net/game-box-art/83649_def283d6-2128-4219-92a2-b75861c4c652.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/813/495/638188013381130265.png"
	},
	{
		"id": 83871,
		"name": "Street Fighter 6",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/1eecb96b-2ce2-4e30-8f01-50f851ea67f4.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/835/307/638226857152233219.png"
	},
	{
		"id": 84062,
		"name": "Rushdown Revolt",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/123da7b8-996e-47be-a65f-da96368ccad4.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/862/643/638271244666920150.png"
	},
	{
		"id": 84137,
		"name": "Tennis Elbow 4",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/5ce2a487-5c5f-4756-a530-cde687972281.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/861/359/638268958862786751.png"
	},
	{
		"id": 84438,
		"name": "Trine 5",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/737c4dac-c1a4-498b-808f-0f14401263b4.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/884/756/638319356679803277.png"
	},
	{
		"id": 84439,
		"name": "Mortal Kombat 1",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/5207b6f9-d6f3-4bf8-be10-32f6edfa5e85.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/884/770/638319361483517457.png"
	},
	{
		"id": 84932,
		"name": "MINIcraft",
		"image": "https://media.forgecdn.net/game-box-art/84932_fe4e21da-ad0d-418d-a771-3d041b706c7b.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/921/420/638385808600378270.png"
	},
	{
		"id": 85196,
		"name": "Palworld",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/88960e8a-e16b-42d5-9224-1754b66d2fee.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/936/141/638413534976321166.jpg",
		os: [OperatingSystem.Windows],
		appWeb: [AppWeb.Standalone, AppWeb.OverwolfApp, AppWeb.Web],
		info: <>Does not behave well with Microsoft Gamepass</>
	},
	{
		"id": 85440,
		"name": "Helldivers 2",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/4c15b7e5-8bd9-4073-b233-9543f6c81b4d.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/952/28/638441936476298295.png"
	},
	{
		"id": 85913,
		"name": "Manor Lords",
		"image": "https://media.forgecdn.net/game-box-art/85913_f4c8d148-de72-472d-9ed9-f6f2f066847a.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/981/997/638489322552047262.png",
		appWeb: [AppWeb.Web],

	},
	{
		"id": 5001,
		"name": "Final Fantasy II",
		"image": "https://media.forgecdn.net/game-box-art/5001_2e6573c1-186c-4259-9d1b-ead9dad7d381.png",
		"avatarUrl": null
	},
	{
		"id": 11805,
		"name": "Zoo Tycoon 2",
		"image": "https://media.forgecdn.net/game-tiles/zoo-tycoon-2.png",
		"avatarUrl": null
	},
	{
		"id": 5021,
		"name": "Final Fantasy V",
		"image": "https://media.forgecdn.net/game-box-art/5021_e7882608-f934-457d-8b8f-1b584a9df1c0.png",
		"avatarUrl": null
	},
	{
		"id": 4773,
		"name": "Final Fantasy VI",
		"image": "https://media.forgecdn.net/game-box-art/4773_0069c4c2-18b0-4885-a439-25adb81b9a82.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/745/638054968911430508.png"
	},
	{
		"id": 8892,
		"name": "Microsoft Flight Simulator",
		"image": "https://media.forgecdn.net/game-tiles/Microsoft+Flight+sim+Tile.jfif",
		"avatarUrl": "https://media.forgecdn.net/avatars/441/265/637691143245487828.png"
	},
	{
		"id": 5230,
		"name": "Final Fantasy I",
		"image": "https://media.forgecdn.net/game-box-art/5230_eb60e5f3-b539-4f2b-b76b-21ba5df40519.png",
		"avatarUrl": null
	},
	{
		"id": 8686,
		"name": "Jurassic Park: Operation Genesis",
		"image": "https://media.forgecdn.net/game-tiles/jurassic-park-operation-genesis.jpg",
		"avatarUrl": null
	},
	{
		"id": 5002,
		"name": "Mario Party 2",
		"image": "https://media.forgecdn.net/game-box-art/5002_819c54f9-de08-4532-9068-772a97dcdd66.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/832/380/638223324483858481.png"
	},
	{
		"id": 202,
		"name": "Warcraft III: Reign of Chaos",
		"image": null,
		"avatarUrl": null
	},
	{
		"id": 7005,
		"name": "System Shock",
		"image": "https://media.forgecdn.net/game-box-art/7005_cf269ccd-b4b4-4fac-8b4c-3c7ec818215d.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/790/442/638145863053235035.png"
	},
	{
		"id": 1,
		"name": "World of Warcraft",
		"image": "https://media.forgecdn.net/game-box-art/1_9b0a8ff4-90c0-4d72-967c-c2c60b8029f7.webp",
		"avatarUrl": "https://media.forgecdn.net/avatars/63/986/636148993918069601.png",
		os: [OperatingSystem.Windows],
		appWeb: [AppWeb.Standalone, AppWeb.OverwolfApp, AppWeb.Web]
	},
	{
		"id": 68,
		"name": "Fallout 3",
		"image": "https://media.forgecdn.net/game-tiles/fallout-3.jpg",
		"avatarUrl": null
	},
	{
		"id": 4741,
		"name": "Final Fantasy IV",
		"image": "https://media.forgecdn.net/game-box-art/4741_b22d5fcb-ee2f-445a-8f1e-958be5a3889c.png",
		"avatarUrl": null
	},
	{
		"id": 5026,
		"name": "Final Fantasy III",
		"image": "https://media.forgecdn.net/game-box-art/5026_3912d352-bdf6-496a-bbee-a07d2377771b.png",
		"avatarUrl": null
	},
	{
		"id": 8612,
		"name": "Euro Truck Simulator",
		"image": "https://media.forgecdn.net/game-tiles/euro-truck-simulator.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/375/780/637551299565475836.png"
	},
	{
		"id": 335,
		"name": "Runes of Magic",
		"image": "https://media.forgecdn.net/game-tiles/Runes+of+Magic+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/76/698/636173120361240569.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 424,
		"name": "Rift",
		"image": "https://media.forgecdn.net/game-tiles/rift_tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/751/638054969923607845.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 447,
		"name": "Fallout: New Vegas",
		"image": "https://media.forgecdn.net/game-tiles/fallout-new-vegas.jpg",
		"avatarUrl": null
	},
	{
		"id": 423,
		"name": "World of Tanks",
		"image": "https://media.forgecdn.net/game-tiles/World+of+Tanks+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/77/677/636174916166063366.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 449,
		"name": "The Elder Scrolls V: Skyrim",
		"image": "https://media.forgecdn.net/game-tiles/Skyrim+Tile.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/77/689/636174976208356224.png"
	},
	{
		"id": 632,
		"name": "Rocket League",
		"image": null,
		"avatarUrl": null
	},
	{
		"id": 431,
		"name": "Terraria",
		"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1d6F8NswgRELpoAUGCP5RuPK8QiJ9_FRuFCMCrZeSfSb74sxee3-jNArcIcKeLh4OuE&usqp=CAU",
		"avatarUrl": "https://media.forgecdn.net/avatars/65/488/636162973579653614.png"
	},
	{
		"id": 465,
		"name": "Counter-Strike: Global Offensive",
		"image": "https://www.gamespot.com/a/uploads/scale_medium/mig/7/2/0/5/2227205-i2cs9uzmq4yua.jpg",
		"avatarUrl": null
	},
	{
		"id": 454,
		"name": "WildStar",
		"image": "https://media.forgecdn.net/game-tiles/WildStar+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/762/638054972820516108.png"
	},
	{
		"id": 4401,
		"name": "Kerbal Space Program",
		"image": "https://media.forgecdn.net/game-tiles/Kerbal+Space+Program+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/747/638054969273937292.png",
		appWeb: [AppWeb.OverwolfApp],
		os: [OperatingSystem.Windows],
		info: <>You should probably use <a href={"https://github.com/KSP-CKAN/CKAN/wiki/User-guide"} target={"_blank"}>CKAN</a> instead</>
	},
	{
		"id": 496,
		"name": "Grand Theft Auto V",
		"image": "",
		"avatarUrl": null
	},
	{
		"id": 4619,
		"name": "The Last of Us",
		"image": "https://media.forgecdn.net/game-box-art/4619_47772a41-a580-4203-b5c7-ea53e4ed5547.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/3/638155844409162919.png"
	},
	{
		"id": 6820,
		"name": "Kenshi",
		"image": "https://media.forgecdn.net/game-tiles/Kenshi+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 455,
		"name": "The Elder Scrolls Online",
		"image": "https://media.forgecdn.net/game-tiles/The+Elder+Scrolls+Online+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/77/188/636173283407439352.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 504,
		"name": "Euro Truck Simulator 2",
		"image": "https://media.forgecdn.net/game-tiles/euro-truck-simulator-2.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/375/747/637551180022713994.png"
	},
	{
		"id": 661,
		"name": "Factorio",
		"image": null,
		"avatarUrl": "https://media.forgecdn.net/avatars/652/743/638054968335915948.png"
	},
	{
		"id": 540,
		"name": "7 Days to Die",
		"image": "https://media.forgecdn.net/game-box-art/540_a36ac8de-f300-461c-bd63-6bd6c22975c3.webp",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/736/638054965886871014.png"
	},
	{
		"id": 48907,
		"name": "Beat It!",
		"image": null,
		"avatarUrl": null
	},
	{
		"id": 4892,
		"name": "Space Engineers",
		"image": "https://static-cdn.jtvnw.net/ttv-boxart/Space%20Engineers-285x380.jpg",
		"avatarUrl": null
	},
	{
		"id": 4588,
		"name": "RimWorld",
		"image": "https://media.forgecdn.net/game-box-art/4588_c621d118-dfed-428a-83a5-8d027160e365.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/752/638054970104094271.png"
	},
	{
		"id": 608,
		"name": "Darkest Dungeon",
		"image": "https://media.forgecdn.net/game-tiles/Darkest+Dungeon+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/742/638054967772267278.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 4482,
		"name": "Subnautica",
		"image": "https://media.forgecdn.net/game-tiles/Subnautica+Tile+.jpg",
		"avatarUrl": null
	},
	{
		"id": 51667,
		"name": "Dead Island 2",
		"image": "https://media.forgecdn.net/game-box-art/51667_3b7ab064-2fa9-4ab3-a2d4-8638de2712d6.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/796/26/638155866447620482.png"
	},
	{
		"id": 6999,
		"name": "Big Pharma",
		"image": "https://media.forgecdn.net/game-tiles/Big+Pharma+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 4819,
		"name": "American Truck Simulator",
		"image": "https://media.forgecdn.net/game-box-art/4819_2d153d76-4dee-4c43-b7bb-d39ce9cfad8b.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/739/638054967147418836.png"
	},
	{
		"id": 4611,
		"name": "XCOM 2",
		"image": "",
		"avatarUrl": "https://media.forgecdn.net/avatars/367/291/637533957149291522.png"
	},
	{
		"id": 732,
		"name": "Planet Coaster",
		"image": "https://media.forgecdn.net/game-tiles/planet-coaster.jpg",
		"avatarUrl": null
	},
	{
		"id": 669,
		"name": "Stardew Valley",
		"image": "https://media.forgecdn.net/game-tiles/Stardew+Valley+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/144/99/636553639128471675.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Standalone, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 6222,
		"name": "BattleTech",
		"image": "https://media.forgecdn.net/game-tiles/BattleTech+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 22191,
		"name": "Frostpunk",
		"image": "https://media.forgecdn.net/game-tiles/Frostpunk+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 22184,
		"name": "New World",
		"image": "https://media.forgecdn.net/game-tiles/New+World+Cover.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/442/522/637694477795475156.jpeg"
	},
	{
		"id": 14331,
		"name": "WarGroove",
		"image": "https://media.forgecdn.net/game-tiles/WarGroove+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 12471,
		"name": "Rend",
		"image": "https://media.forgecdn.net/game-tiles/Rend+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 57483,
		"name": "Days Gone",
		"image": "https://media.forgecdn.net/game-tiles/days-gone-box.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/720/638054901333002711.png"
	},
	{
		"id": 4455,
		"name": "Secret World Legends",
		"image": "https://media.forgecdn.net/game-tiles/Secret+World+Legends+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/754/638054970768371241.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 6647,
		"name": "My Time at Portia",
		"image": "https://media.forgecdn.net/game-tiles/My+Time+at+Portia+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 57972,
		"name": "Phantom Brigade",
		"image": "https://media.forgecdn.net/game-box-art/57972_8bc0b0d0-7d41-444c-9b3c-4b7709ffefb3.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/783/706/638131894303274679.png"
	},
	{
		"id": 18237,
		"name": "Staxel",
		"image": "https://media.forgecdn.net/game-tiles/Staxel+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/757/638054971551039662.png"
	},
	{
		"id": 58024,
		"name": "Vintage Story",
		"image": "https://media.forgecdn.net/game-tiles/Vintage+Story+Tile.jfif",
		"avatarUrl": null
	},
	{
		"id": 58053,
		"name": "Jurassic World Evolution",
		"image": "https://media.forgecdn.net/game-tiles/jurassic-world-evolution.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/746/638054969068288078.png"
	},
	{
		"id": 58234,
		"name": "Warhammer: Vermintide 2",
		"image": "https://media.forgecdn.net/game-tiles/Warhammer+Vermintide+2+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 61489,
		"name": "Surviving Mars",
		"image": "https://media.forgecdn.net/game-tiles/Surviving+Mars+Tile.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/758/638054971686927279.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 64244,
		"name": "Farming Simulator 19",
		"image": "https://media.forgecdn.net/game-tiles/Farming+Simulator+19+Tile.jpg",
		"avatarUrl": null
	},
	{
		"id": 65814,
		"name": "Fallout 76",
		"image": "https://media.forgecdn.net/game-tiles/Fallout+76+Tile.png",
		"avatarUrl": null
	},
	{
		"id": 66022,
		"name": "Satisfactory",
		"image": "https://media.forgecdn.net/game-box-art/66022_e3e7a2ba-e283-491a-92da-af444c4dc4c6.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/753/638054970481595117.png"
	},
	{
		"id": 67850,
		"name": "Bloons TD 6",
		"image": "https://media.forgecdn.net/game-tiles/bloons-td-6.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/343/611/637488990211647743.png"
	},
	{
		"id": 68013,
		"name": "Valheim",
		"image": "https://media.forgecdn.net/game-tiles/valheim.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/347/212/637496802815720222.png"
	},
	{
		"id": 69073,
		"name": "Megaquarium",
		"image": "https://media.forgecdn.net/game-tiles/megaqarium.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/405/206/637616842892684035.png"
	},
	{
		"id": 69761,
		"name": "Among Us",
		"image": "https://media.forgecdn.net/game-tiles/among-us.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/737/638054966435845908.png"
	},
	{
		"id": 70667,
		"name": "Chronicles of Arcadia",
		"image": "https://cfcore-assets.forgecdn.net/game-tiles/7ad5975f-81c5-4ffb-b809-c283dc1ac986.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/741/638054967544087957.png",
		appWeb: [AppWeb.OverwolfApp, AppWeb.Web],
		os: [OperatingSystem.Windows]
	},
	{
		"id": 70752,
		"name": "Subnautica: Below Zero",
		"image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Subnautica_Below_Zero_cover_art.jpg/220px-Subnautica_Below_Zero_cover_art.jpg",
		"avatarUrl": null
	},
	{
		"id": 71010,
		"name": "Darkest Dungeon 2",
		"image": "https://s2.gaming-cdn.com/images/products/7783/orig/darkest-dungeon-ii-pc-spel-epic-games-cover.jpg",
		"avatarUrl": null
	},
	{
		"id": 71638,
		"name": "The Riftbreaker",
		"image": "https://thumbnails.pcgamingwiki.com/0/0a/The_Riftbreaker_cover.jpg/300px-The_Riftbreaker_cover.jpg",
		"avatarUrl": null
	},
	{
		"id": 71878,
		"name": "Planet Zoo",
		"image": "https://media.forgecdn.net/game-tiles/planet-zoo.jpg",
		"avatarUrl": null
	},
	{
		"id": 72458,
		"name": "Baldur's Gate 3",
		"image": "https://media.forgecdn.net/game-box-art/72458_a2e89bc2-8004-4ffd-8a5f-157f88184aa7.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/862/894/638271743496364735.png"
	},
	{
		"id": 75009,
		"name": "Sons of the Forest",
		"image": "https://media.forgecdn.net/game-box-art/75009_eaac01eb-ff24-4fff-881b-514b2ee00f7e.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/782/847/638130162244935608.png"
	},
	{
		"id": 76592,
		"name": "XCOM: Chimera Squad",
		"image": "https://media.forgecdn.net/game-tiles/chimera_squad.jpg",
		"avatarUrl": "https://media.forgecdn.net/avatars/367/290/637533957076536609.png"
	},
	{
		"id": 77546,
		"name": "Resident Evil Village",
		"image": "https://media.forgecdn.net/game-tiles/resident-evil-village.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/652/761/638054972647060432.png"
	},
	{
		"id": 77548,
		"name": "Returnal",
		"image": "https://media.forgecdn.net/game-box-art/77548_0160912d-0339-40bf-a269-8a3a82a1465f.png",
		"avatarUrl": "https://media.forgecdn.net/avatars/777/965/638121555152445726.png"
	}
];

export default GamesInformation;