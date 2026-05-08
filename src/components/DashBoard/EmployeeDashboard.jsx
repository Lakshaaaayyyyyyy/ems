import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNum data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard