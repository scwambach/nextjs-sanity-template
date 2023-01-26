import * as SiIcons from '@meronex/icons/si';
import * as FaIcons from '@meronex/icons/fa';
import { AiOutlineLink, AiOutlineMail } from '@meronex/icons/ai';
import { colors } from '@styles';

interface Props {
  name: string;
  color?: string;
  size?: number;
  faIcons?: boolean;
}

function DynamicIcon({
  name,
  size = 50,
  color = colors.black,
  faIcons = false,
}: Props) {
  const IconComponent = faIcons ? FaIcons[name] : SiIcons[name];
  if (name === 'AiOutlineMail') {
    return <AiOutlineMail size={size} color={color} />;
  }

  if (name === 'AiOutlineLink') {
    return <AiOutlineLink size={size} color={color} />;
  }

  if (!IconComponent) {
    return <SiIcons.SiAbstract size={size} color={color} />;
  }

  return <IconComponent size={size} color={color} />;
}

export { DynamicIcon };
