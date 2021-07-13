import React from 'react'
import Tap from './Tap'

    function AppFunction () {

        function clickFirstBtn () {
            console.log('Clicked the first button')
        }

        function clickSecondBtn () {
             alert('Clicked the second button')
        }

        function clickThirdBtn (el) {
            console.log('Clicked the third button:' , el)
        }
    
        return (
            <div>
                <Tap label='Кнопка 1' clickFunction={clickFirstBtn} />
                <Tap label='Вторая кнопка' clickFunction={clickSecondBtn} />
                <Tap label='Кнопка с параметром' clickFunction={clickThirdBtn} />
            </div>
        )

    }

export default AppFunction    