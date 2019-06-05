Component({
  relations: {
    '../cell/cell': {
      type: 'child',
      linked(target) {
        this._updateIsLastCell();
      },
      linkChanged(target) {
        this._updateIsLastCell();
      },
      unlinked(target) {
        this._updateIsLastCell();
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    menuCard: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _updateIsLastCell() {
      const cells = this.getRelationNodes('../cell/cell');
      const len = cells.length;

      if (len > 0) {
        let lastIndex = len - 1;

        cells.forEach((cell, index) => {
          cell.updateIsLastCell(index === lastIndex)
        })
      }
    }
  }
})
