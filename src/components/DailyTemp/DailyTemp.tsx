import React, {FC} from 'react'

import st from './DailyTemp.module.scss'
import Card from '@mui/material/Card'

interface Props {
  dailyTemp: number[],
  dailyTime: string[]
}

const DailyTemp: FC<Props> = ({dailyTemp, dailyTime}) => {

  return (
      <div className={st.DailyTemp}>
        <Card>
          <div className={st.DailyTemp__time}>
            {
              dailyTime.map((time, id) => {
                return (
                  <div className={st.DailyTemp__hour} key={id}>
                    {time}
                  </div>
                )
              })
            }
          </div>
        </Card>
        <div className={st.DailyTemp__graph}>
          {
            dailyTemp.map((temp, id) => {
              const styles = {
                marginBottom: temp > 0 ? `${temp * 10}px` : `${temp * 10}px`,
                background: temp > 0 ? `rgba(255, 91, 3, ${(temp*6/100)})` : `rgba(3, 86, 255, ${(-temp*6/100)})`
              }

              return (
                <div
                  className={st.DailyTemp__temp}
                  key={id}
                  style={styles}
                >
                  {temp > 0 ? `+${temp}` : temp}
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default DailyTemp