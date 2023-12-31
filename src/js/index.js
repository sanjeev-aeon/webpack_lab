// import command from 'js/clickCommand.js';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'js/clickCommand.js';

  return element;
}

function createAButton() {
  const button = document.createElement('button');
  button.title = 'clickMe';
  button.appendChild(document.createTextNode('clickMe'));
  button.onclick = async () => {
    try {
      const file = 'clickCommand.js';
      //split
      const command = await import(`commands/${file}`);
      command.default.execute();
    } catch (err) {
      console.error(`err loading command module: ${err}`);
      console.dir(err);
    }

    console.log('you really clicked!!!');
  };
  return button;
}

function container() {
  const container = document.createElement('div');
  container.appendChild(component());
  container.appendChild(createAButton());
  return container;
}
document.body.appendChild(container());
