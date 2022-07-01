import LinkedList from '../linked-list'
import map from './map'

describe('map', () => {
  it('takes a mapper function and returns another function', () => {
    const mapToStrArr = map((n: number) => `${n}`)
    expect(typeof mapToStrArr).toBe('function')
  })

  it('creates a function that maps over an array of primitive values', () => {
    const nums = [1, 2, 3, 4, 5]
    const mapToStr = map((n: number) => `${n}`)
    const strs = mapToStr(nums)
    expect(strs).toEqual(['1', '2', '3', '4', '5'])
  })

  it('creates a function that maps over and array of objects', () => {
    interface User {
      name: string
      password: string
    }

    interface TUser {
      nameLength: number
      password: string
      id: number
    }

    const transformUser = (u: User, id: number): TUser => {
      return {
        nameLength: u.name.length,
        password: '*****',
        id
      }
    }

    const transformUserList = map(transformUser)

    const users: User[] = [
      {
        name: 'user1',
        password: 'password'
      }, {
        name: '!user1',
        password: 'kasdogu'
      }
    ]

    const tUsers = transformUserList(users)

    expect(tUsers).toEqual<TUser[]>([{
      nameLength: 5,
      password: '*****',
      id: 0
    }, {
      nameLength: 6,
      password: '*****',
      id: 1
    }])
  })

  it('creates a function maps over a record', () => {
    interface User {
      name: string
    }

    interface TUser {
      length: number
      id: string
    }

    const users: Record<string, User> = {
      '1': {
        name: 'lindell'
      },
      '2': {
        name: 'landon'
      }
    }

    const transformUser = (user: User, id: string): TUser => ({
      length: user.name.length,
      id
    })
    
    const transformUsers = map(transformUser)

    const tUsers = transformUsers(users)

    expect(tUsers).toEqual<Record<string, TUser>>({
      '1': {
        length: 7,
        id: '1'
      },
      '2': {
        length: 6,
        id: '2'
      }
    })
  })

  it('creates a function that maps over a linked list', () => {
    const list1 = LinkedList.of(1, 2, 3, 4, 5)
    const res = map((item: number, index: number) => (item + index).toString())(list1)
    expect(res).toEqual(LinkedList.of('1', '3', '5', '7', '9'))
  })
})