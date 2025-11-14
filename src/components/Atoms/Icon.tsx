import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

function Icon({ icon }: IconProps) {
  return (
   <FontAwesomeIcon icon={icon} />
  );
}

export interface IconProps {
  icon: IconDefinition;
}

export default Icon;