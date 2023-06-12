import React from "react";
import styles from "./Service.module.css";
class Service extends React.Component {
  render() {
    return (
      <>
        <p className={styles.item}>{this.props.newtext}</p>
      </>
    );
  }
}
export default Service;
