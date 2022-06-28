import React from 'react'
import { getColorContrast } from '../utils'

const ContrastInfoCard = props => {
  const { color1, color2 } = props

  // let contrast = undefined
  // if (color1.relativeLuminance >= 0 && color2.relativeLuminance >= 0) {
  //   contrast = getColorContrast(color1.relativeLuminance, color2.relativeLuminance)
  //   console.log(contrast)
  // }

  const contrast = getColorContrast(color1.relativeLuminance, color2.relativeLuminance)

  return (
    <>
      {contrast > 1 ? (
        <article className="infoCardContainer">
          <div className="infoCardColorSwatch" style={{ backgroundColor: color1.colorCodeHex, color: color2.colorCodeHex }}>
            Aa
          </div>
          <div>
            <p>Color: {color1.colorCodeHex}</p>
            <p>Color: {color2.colorCodeHex}</p>
          </div>
          <div>
            <p>
              <strong>{Math.round(contrast * 100) / 100}:1</strong>
            </p>
            {contrast >= 7 && (
              <div>
                <p>AAA</p>
              </div>
            )}
            {contrast >= 4.5 && contrast < 7 && (
              <div>
                <p>AA</p>
              </div>
            )}
            {contrast >= 3 && contrast < 4.5 && (
              <div>
                <p>AA LARGE TEXT</p>
              </div>
            )}
          </div>
          <div>
            {contrast >= 3 && <p className="infoCardPassFail">PASS</p>}
            {contrast < 3 && <p className="infoCardPassFail">FAIL</p>}
          </div>
        </article>
      ) : null}
    </>
  )
}

export default ContrastInfoCard
