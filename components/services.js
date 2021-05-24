const classes = {
  serviceContainer: ``,
  serviceCardBox: `w-max max-w-2xl m-auto`,
  serviceCard: `w-72`,
  serviceImg: ``,
  serviceHeader: ``,
  serviceBody: ``,
}

export default function Services() {
  return (
    <div className={classes.serviceContainer}>
      <div className={classes.serviceCardBox}>
        <div className={classes.serviceCard}>
          <h3 className={classes.serviceHeader}>Service 1</h3>
          <p className={classes.serviceBody}>
            This is a super neat skill I'd like to share and help others with.
          </p>
        </div>
      </div>
    </div>
  )
}
