import React from "react"

const VideoCard = ({ tags, title, videoUrl, children }) => (
  <div class="bg-white rounded overflow-hidden shadow-lg">
    <div className="w-full h-64">
      <iframe
        title={title}
        height="100%"
        width="100%"
        src={videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{title}</div>
    </div>
    <div class="px-6 py-4">
      {tags &&
        tags.map(tag => (
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {`#${tag}`}
          </span>
        ))}
    </div>
  </div>
)

export default VideoCard
