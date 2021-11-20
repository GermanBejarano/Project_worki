function ChangeUrl(props, url) {
  const { history, location } = props;
  const { from } = location.state || {
    from: {
      pathname: url,
    },
  };
  history.push(from);
}

export default ChangeUrl;
