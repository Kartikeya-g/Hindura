import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const ConstructionVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(console.log);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(console.log);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full max-w-md mx-auto"
    >
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-construction-900 to-primary-900"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          className="w-full h-[36rem] object-cover rounded-3xl"
          muted={isMuted}
          loop
          playsInline
          poster="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg"
        >
          <source src="https://v1.pinimg.com/videos/mc/720p/67/7b/a9/677ba9174dcb3a20a9e03944058e0e94.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Controls */}
        {/* <div className={`absolute inset-0 bg-black/20 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'} transition duration-300`}>
          <div className="flex justify-center items-center h-full">
            <motion.button
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <Pause className="h-16 w-16 text-white" />
              ) : (
                <Play className="h-16 w-16 text-white" />
              )}
            </motion.button>
          </div>

          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30"
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-white" />
            ) : (
              <Volume2 className="h-5 w-5 text-white" />
            )}
          </button>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ConstructionVideo;
