import { expect } from 'chai';

import { escapeMarkdown, uris_equal } from './utils';

describe('uris_equal', () => {
  it('should workaround Windows paths/Pyright issues', () => {
    const result = uris_equal(
      'file:///d%3A/a/jupyterlab-lsp/jupyterlab-lsp/atest/output/windows_39_4/home/n%C3%B6te%20b%C3%B2%C3%B3ks/example.py',
      'file:///d:/a/jupyterlab-lsp/jupyterlab-lsp/atest/output/windows_39_4/home/n%C3%B6te%20b%C3%B2%C3%B3ks/example.py'
    );
    expect(result).to.equal(true);
  });
});

describe('escapeMarkdown', () => {
  it('escapes italics', () => {
    expect(escapeMarkdown('pre *italic* post')).to.equal(
      'pre \\*italic\\* post'
    );
  });
  it('escapes bold', () => {
    expect(escapeMarkdown('pre **bold** post')).to.equal(
      'pre \\*\\*bold\\*\\* post'
    );
  });
  it('escapes headers', () => {
    expect(escapeMarkdown('pre #heading post')).to.equal('pre \\#heading post');
  });
  it('escapes URLs', () => {
    expect(escapeMarkdown('pre [link](https://example.com) post')).to.equal(
      'pre \\[link\\](https://example.com) post'
    );
  });
});
