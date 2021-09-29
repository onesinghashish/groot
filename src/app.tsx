import { css } from 'goober';
import { FunctionComponent, h } from 'preact';
import colors from './styles/colors';
import font from './styles/font';

const Background = css`
  background: ${colors.black};
  height: 100%;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${font.fontLarge};
`;
const App: FunctionComponent = () => {
  return <div class={Background}>Hello World  333</div>;
};

export default App;
