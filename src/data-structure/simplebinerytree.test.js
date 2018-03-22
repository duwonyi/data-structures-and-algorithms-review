const assert = require('chai').assert
const SimpleBineryTree = require('./simplebinerytree')

describe('Simple BineryTree Test', () => {
  it('Treverse with Stack', () => {
    const sbtree = new SimpleBineryTree()
    let toutput = ''

    sbtree.makeTree()
    sbtree.treverse(item => (toutput += item))
    assert.equal('ABDECFG', toutput)
  })

  it('Inorder Treverse by recrusion', () => {
    const sbtree = new SimpleBineryTree()
    let toutput = ''

    sbtree.makeTree()
    sbtree.treverseInOrderRecursive(sbtree.root, item => (toutput += item))
    assert.equal('DBEAFCG', toutput)

    toutput = ''
    sbtree.treverseInOrderWithStack(item => (toutput += item))
    assert.equal('DBEAFCG', toutput)
  })

  it('Inorder Treverse with Stack', () => {
    const sbtree = new SimpleBineryTree()
    let toutput = ''

    sbtree.makeTree()
    sbtree.treverseInOrderWithStack(item => (toutput += item))
    assert.equal('DBEAFCG', toutput)
  })

  it('Postorder Treverse with Stack', () => {
    const sbtree = new SimpleBineryTree()
    let toutput = ''

    sbtree.makeTree()
    sbtree.treversePostOrderWithStack(item => (toutput += item))
    assert.equal('DEBFGCA', toutput)
  })
})
