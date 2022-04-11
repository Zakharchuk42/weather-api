import React, {FC} from 'react'

import st from './CityCard.module.scss'

interface Props {
  children: React.ReactChild | React.ReactNode
}

const CityCard: FC<Props> = ({children}) => {
  return (
    <div className={st.CityCard}>
      {children}
    </div>
  )
}

export default CityCard