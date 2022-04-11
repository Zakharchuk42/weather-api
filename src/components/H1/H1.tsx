import React, {FC} from 'react'

import st from './H1.module.scss'

interface Props {
  children: string;
}

const H1: FC<Props> = ({children}) => {
  return (
    <div className={st.H1}>
      {children}
    </div>
  )
}

export default H1