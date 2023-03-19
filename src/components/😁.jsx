import { getRandomInt } from '@vkontakte/vkjs';
import {
  Div, FixedLayout,
} from '@vkontakte/vkui';

function Emojis() {
  const emojis = ['😘', '😟', '😲', '😠', '😁', '😖'];
  return (
    <FixedLayout vertical="bottom">
      <Div style={{
        display: 'flex', justifyContent: 'space-around', justifyItems: 'center', textAlign: 'center', margin: '0px auto 5vh auto', maxWidth: 600,
      }}
      >
        {emojis.map(emoji => (
          <div key={emoji}>
            <div style={{ fontSize: 36 }}>
              {emoji}
            </div>
            <div style={{ fontSize: 24 }}>
              {getRandomInt(0, 12)}
            </div>
          </div>
        ))}
      </Div>
    </FixedLayout>
  );
}

export default Emojis;
