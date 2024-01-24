import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface Props {
  direction?: 'horizontal' |'vertical'
}

const MediaBar:React.FC<Props> = ({
  direction = 'horizontal'
}) => {
  return (
    <div className="flex text-3xl">
      <div className="w-12 h-12 border flex items-center justify-center hover:bg-white hover:text-dark-blue transition">
        <InstagramIcon fontSize='inherit'/>
      </div>
      <div className="w-12 h-12 border flex items-center justify-center hover:bg-white hover:text-dark-blue transition">
        <YouTubeIcon fontSize='inherit'/>
      </div>
      <div className="w-12 h-12 border flex items-center justify-center hover:bg-white hover:text-dark-blue transition">
        <XIcon fontSize='inherit'/>
      </div>
      <div className="w-12 h-12 border flex items-center justify-center hover:bg-white hover:text-dark-blue transition">
        <TwitterIcon  fontSize='inherit'/>
      </div>
    </div>
  )
}

export default MediaBar;