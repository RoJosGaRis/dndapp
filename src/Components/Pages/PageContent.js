import "./PageContent.css";

const PageContent = (props) => {
  const classes = "page-content " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default PageContent;
