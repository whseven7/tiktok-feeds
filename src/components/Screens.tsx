import ReactPlayer from "react-player";

function Screens() {
  const links = [
    "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    "https://www.youtube.com/watch?v=uhpBAzZQCFM",
    "https://www.youtube.com/watch?v=px1oUXbmH9w",
  ];

  const display = (url: any) => {
    return (
      <ReactPlayer style={{ margin: 100 }} height={700} width={450} url={url} />
    );
  };

  return <>{links.map(display)}</>;
}

export default Screens;
