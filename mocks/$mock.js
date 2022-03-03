/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './api/v2/items'

export default (client) => mockServer([
  {
    path: '/api/v2/items',
    methods: mock0
  }
], client, '')
