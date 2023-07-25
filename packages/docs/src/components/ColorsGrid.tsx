import { colors } from '@ignite-ui-diego/tokens'
// chamando uma função de contraste da lib polished
import { getContrast } from 'polished'

export function ColorsGrid() {
  // Object.entries retorna um array com varios arrays com chave e valor.
  // fazemos a desestruturação do array para pegar as valores.
  return Object.entries(colors).map(([key, colorHex]) => {
    return (
      <div key={key} style={{ backgroundColor: colorHex, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(colorHex, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${key}</strong>
          <span>{colorHex}</span>
        </div>
      </div>
    )
  })
}
