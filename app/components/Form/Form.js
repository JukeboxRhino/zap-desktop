import React from 'react'
import PropTypes from 'prop-types'

import { FaClose } from 'react-icons/lib/fa'

import PayForm from './PayForm'
import RequestForm from './RequestForm'

import styles from './Form.scss'

const FORM_TYPES = {
  PAY_FORM: PayForm,
  REQUEST_FORM: RequestForm
}

const Form = ({ formType, formProps, closeForm }) => {
  if (!formType) { return null }

  const FormComponent = FORM_TYPES[formType]
  return (
    <div className={`${styles.outtercontainer} ${formType && styles.open}`}>
      <div className={styles.innercontainer}>
        <div className={styles.esc} onClick={closeForm}>
          <FaClose />
        </div>

        <div className={styles.content}>
          <FormComponent {...formProps} />
        </div>
      </div>
    </div>
  )
}


Form.propTypes = {
  formType: PropTypes.string,
  formProps: PropTypes.object.isRequired,
  closeForm: PropTypes.func.isRequired
}

export default Form
