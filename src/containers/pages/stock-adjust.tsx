import * as React from 'react';
import { Button, Table } from 'antd'
import { GetInventory } from '../../server/index'

interface IProps {
    location: any
    todos?: any
}

interface IMyState {
    step: number
    dataSource: object[],
    columns: []
}

class StockAdjust extends React.Component<IProps, IMyState> {
    columns = [
        { title: '姓名', dataIndex: 'name', key: 'name', }, 
        { title: '年龄', dataIndex: 'age', key: 'age', }, 
        { title: '住址', dataIndex: 'address', key: 'address', }
    ]

    dataSource = [
        { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' }, 
        { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号' }
    ]

    componentWillMount() {
        this.setState({
            step: this.props.location.pathname.slice(-1),
            dataSource: this.dataSource
        })
    }
    
    componentDidMount() {
        this.loadData()

        setTimeout(()=>{
            let tst = [
                { key: '1', name: 'qweqwe', age: 32, address: '西湖区湖底公园1号' }, 
            ]
            this.setState({
                dataSource: tst
            })
        }, 1000)
    }

    loadData() {
        GetInventory({
            pageSize: 10,
            pageNum: 1
        }).then((res) => {
            console.log(res)
        })
    }

    render() {
        const state = this.state
        return (
            <div>
                <div style={{ float: 'left' }}><Button type="primary">Add</Button></div>
                <div style={{ float: 'right' }}>
                    <Button type="primary" icon="search">Search</Button>
                </div>
                <Table dataSource={state.dataSource} columns={this.columns} />
            </div>
        )
    }
}

export default StockAdjust;