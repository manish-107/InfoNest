
const videos = [
  { imgSrc: 'https://picsum.photos/seed/59/300/200', profileSrc: 'https://picsum.photos/seed/1/40/40', title: 'Learn CSS Box Model in 8 Minutes', channel: 'Web Dev Simplified', views: '241K views', time: '3 years ago' },
  { imgSrc: 'https://picsum.photos/seed/60/300/200', profileSrc: 'https://picsum.photos/seed/4/40/40', title: 'Learn CSS Box Model in 8 Minutes', channel: 'Web Dev Simplified', views: '241K views', time: '3 years ago' },
  { imgSrc: 'https://picsum.photos/seed/22/300/200', profileSrc: 'https://picsum.photos/seed/88/40/40', title: 'Learn CSS Box Model in 8 Minutes', channel: 'Web Dev Simplified', views: '241K views', time: '3 years ago' },
  { imgSrc: 'https://picsum.photos/seed/90/300/200', profileSrc: 'https://picsum.photos/seed/57/40/40', title: 'Learn CSS Box Model in 8 Minutes', channel: 'Web Dev Simplified', views: '241K views', time: '3 years ago' },
];

const VideoGrid: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid max-w-6xl grid-cols-12 gap-2 gap-y-4">
        {videos.map((video, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-col w-full">
              <div className="">
                <a href="#">
                  <img src={video.imgSrc} className="h-auto w-96" alt={video.title} />
                </a>
              </div>
              <div className="flex flex-row gap-2 mt-2">
                <a href="#">
                  <img src={video.profileSrc} className="rounded-full max-h-10 max-w-10" alt={video.channel} />
                </a>
                <div className="flex flex-col">
                  <a href="#">
                    <p className="text-sm font-semibold text-gray-100">{video.title}</p>
                  </a>
                  <a className="mt-2 text-xs text-gray-400 hover:text-gray-100" href="#">{video.channel}</a>
                  <p className="mt-1 text-xs text-gray-400">{video.views} . {video.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default VideoGrid;
