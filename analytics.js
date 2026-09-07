window.Analytics = {
  KEY: 'rc_portfolio_views',
  _read() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch (e) { return {}; }
  },
  record(title) {
    const data = this._read();
    data[title] = (data[title] || 0) + 1;
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch (e) {}
    return data[title];
  },
  get(title) {
    return this._read()[title] || 0;
  },
};
