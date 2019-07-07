import './styles/main.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { HeaderComponent } from './features/Header/components/Header/HeaderComponent';
import { store } from './store/createStore';

export const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <HeaderComponent title='justin livi' />
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula
          erat, ultricies a orci in, convallis ornare est. In vestibulum varius
          nunc in tristique. Proin pellentesque, nisi malesuada volutpat luctus,
          nisl dolor tempus justo, eget consequat ex felis sed leo. Cras feugiat
          diam eu vulputate dignissim. Maecenas a metus et nisi tempus maximus.
          Vivamus vel ipsum nec augue viverra pellentesque id eu nisi.
          Suspendisse sed justo orci. Fusce pharetra dui sed enim porttitor
          aliquam. Duis id tempus libero, sit amet consectetur diam. Aenean
          tellus dolor, dapibus a tempor ut, accumsan quis neque. Donec volutpat
          risus leo, ut euismod est interdum eu. Aenean efficitur vel nunc vitae
          laoreet. Integer sem nunc, tristique suscipit ultrices in, luctus eget
          mi. Donec quis lorem urna.
        </p>
        <p>
          Sed varius risus placerat, varius tortor quis, sodales nunc. Nam eu
          dui venenatis, imperdiet velit a, gravida velit. Aliquam a risus et
          diam finibus congue. Duis sit amet velit ut est pulvinar malesuada.
          Pellentesque vehicula laoreet hendrerit. In hac habitasse platea
          dictumst. Nunc nec ipsum et tortor ornare mollis. Donec a purus
          libero. Nulla nisl libero, interdum ac fringilla eget, convallis eu
          lectus. Etiam pharetra neque nec nunc interdum, dignissim ullamcorper
          est malesuada. Integer eget dictum erat. Donec ut posuere ligula, non
          dignissim leo. Etiam facilisis elit vel eros eleifend consectetur.
        </p>
        <p>
          Nulla congue leo nec ex consequat, sodales luctus magna faucibus.
          Pellentesque elit neque, pharetra scelerisque placerat vel, sodales a
          nulla. Curabitur viverra tortor vel metus bibendum iaculis.
          Suspendisse sit amet condimentum ante, nec auctor orci. Proin id
          lectus non eros ullamcorper congue. Morbi in ultrices enim, vel
          tincidunt tellus. Phasellus fringilla, ante at iaculis condimentum,
          augue augue euismod neque, eu porttitor magna augue vel sem.
        </p>
        <p>
          Sed vitae eleifend nisl, vitae pharetra ex. Mauris blandit dui a nibh
          dictum, lobortis maximus mi dapibus. Nullam velit ex, ornare vel purus
          ac, tempor ultricies enim. Vivamus a aliquet leo. Suspendisse quis
          pharetra sem. Ut varius enim eu nulla mollis, eget auctor ante
          pretium. Mauris et ligula sit amet nisl vehicula lacinia. Donec vel
          metus nisi. Donec ut nisi lacus. Etiam vel orci nec mi ultrices
          rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Maecenas non iaculis nisl, viverra malesuada urna. Phasellus et tellus
          quis felis pharetra egestas.
        </p>
        <p>
          Ut pellentesque risus et est dignissim posuere eget porta enim.
          Vivamus rutrum purus felis, porttitor euismod nulla interdum a. Fusce
          eget nisi et nisl aliquam pellentesque. Duis consequat ullamcorper
          nunc sit amet sagittis. Vivamus sit amet maximus velit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis a sollicitudin urna.
          Nam placerat euismod nunc, ac malesuada nisi dictum sed. Vestibulum
          sollicitudin vitae augue vel ultrices.
        </p>
        <p>
          Sed vitae eleifend nisl, vitae pharetra ex. Mauris blandit dui a nibh
          dictum, lobortis maximus mi dapibus. Nullam velit ex, ornare vel purus
          ac, tempor ultricies enim. Vivamus a aliquet leo. Suspendisse quis
          pharetra sem. Ut varius enim eu nulla mollis, eget auctor ante
          pretium. Mauris et ligula sit amet nisl vehicula lacinia. Donec vel
          metus nisi. Donec ut nisi lacus. Etiam vel orci nec mi ultrices
          rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Maecenas non iaculis nisl, viverra malesuada urna. Phasellus et tellus
          quis felis pharetra egestas.
        </p>
        <p>
          Ut pellentesque risus et est dignissim posuere eget porta enim.
          Vivamus rutrum purus felis, porttitor euismod nulla interdum a. Fusce
          eget nisi et nisl aliquam pellentesque. Duis consequat ullamcorper
          nunc sit amet sagittis. Vivamus sit amet maximus velit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis a sollicitudin urna.
          Nam placerat euismod nunc, ac malesuada nisi dictum sed. Vestibulum
          sollicitudin vitae augue vel ultrices.
        </p>
      </main>
    </Provider>
  </BrowserRouter>
);
