import { pass, fail } from '../core';
import { Context } from '../../../src/parser/common';

fail('Statements - Thow (fail)', [
  [
    `throw
  x;`,
    Context.OptionsDisableWebCompat
  ]
]);

pass('Statements - Thow (pass)', [
  [
    `throw ((((((d = null)))) ? (((--r))) : ((/|[--]*||[^\\u2B7a+-?]+|(?!)/giy))));`,
    Context.OptionsNext | Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ThrowStatement',
          argument: {
            type: 'ConditionalExpression',
            test: {
              type: 'AssignmentExpression',
              left: {
                type: 'Identifier',
                name: 'd',
                start: 12,
                end: 13,
                loc: {
                  start: {
                    line: 1,
                    column: 12
                  },
                  end: {
                    line: 1,
                    column: 13
                  }
                }
              },
              operator: '=',
              right: {
                type: 'Literal',
                value: null,
                start: 16,
                end: 20,
                loc: {
                  start: {
                    line: 1,
                    column: 16
                  },
                  end: {
                    line: 1,
                    column: 20
                  }
                }
              },
              start: 12,
              end: 20,
              loc: {
                start: {
                  line: 1,
                  column: 12
                },
                end: {
                  line: 1,
                  column: 20
                }
              }
            },
            consequent: {
              type: 'UpdateExpression',
              argument: {
                type: 'Identifier',
                name: 'r',
                start: 32,
                end: 33,
                loc: {
                  start: {
                    line: 1,
                    column: 32
                  },
                  end: {
                    line: 1,
                    column: 33
                  }
                }
              },
              operator: '--',
              prefix: true,
              start: 30,
              end: 33,
              loc: {
                start: {
                  line: 1,
                  column: 30
                },
                end: {
                  line: 1,
                  column: 33
                }
              }
            },
            alternate: {
              type: 'Literal',
              value: /|[--]*||[^\u2B7a+-?]+|(?!)/giy,
              regex: {
                pattern: '|[--]*||[^\\u2B7a+-?]+|(?!)',
                flags: 'giy'
              },
              start: 41,
              end: 72,
              loc: {
                start: {
                  line: 1,
                  column: 41
                },
                end: {
                  line: 1,
                  column: 72
                }
              }
            },
            start: 8,
            end: 74,
            loc: {
              start: {
                line: 1,
                column: 8
              },
              end: {
                line: 1,
                column: 74
              }
            }
          },
          start: 0,
          end: 77,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 77
            }
          }
        }
      ],
      start: 0,
      end: 77,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 77
        }
      }
    }
  ],
  [
    `throw /(?=[^\\x4f-\\xF5(-)])/imy`,
    Context.OptionsNext | Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ThrowStatement',
          argument: {
            type: 'Literal',
            value: /(?=[^\x4f-\xF5(-)])/imy,
            regex: {
              pattern: '(?=[^\\x4f-\\xF5(-)])',
              flags: 'imy'
            },
            start: 6,
            end: 30,
            loc: {
              start: {
                line: 1,
                column: 6
              },
              end: {
                line: 1,
                column: 30
              }
            }
          },
          start: 0,
          end: 30,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 30
            }
          }
        }
      ],
      start: 0,
      end: 30,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 30
        }
      }
    }
  ],
  [
    `function f() { do throw pass
        while(x);
      }`,
    Context.OptionsNext | Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'FunctionDeclaration',
          params: [],
          body: {
            type: 'BlockStatement',
            body: [
              {
                type: 'DoWhileStatement',
                body: {
                  type: 'ThrowStatement',
                  argument: {
                    type: 'Identifier',
                    name: 'pass',
                    start: 24,
                    end: 28,
                    loc: {
                      start: {
                        line: 1,
                        column: 24
                      },
                      end: {
                        line: 1,
                        column: 28
                      }
                    }
                  },
                  start: 18,
                  end: 28,
                  loc: {
                    start: {
                      line: 1,
                      column: 18
                    },
                    end: {
                      line: 1,
                      column: 28
                    }
                  }
                },
                test: {
                  type: 'Identifier',
                  name: 'x',
                  start: 43,
                  end: 44,
                  loc: {
                    start: {
                      line: 2,
                      column: 14
                    },
                    end: {
                      line: 2,
                      column: 15
                    }
                  }
                },
                start: 15,
                end: 46,
                loc: {
                  start: {
                    line: 1,
                    column: 15
                  },
                  end: {
                    line: 2,
                    column: 17
                  }
                }
              }
            ],
            start: 13,
            end: 54,
            loc: {
              start: {
                line: 1,
                column: 13
              },
              end: {
                line: 3,
                column: 7
              }
            }
          },
          async: false,
          generator: false,
          id: {
            type: 'Identifier',
            name: 'f',
            start: 9,
            end: 10,
            loc: {
              start: {
                line: 1,
                column: 9
              },
              end: {
                line: 1,
                column: 10
              }
            }
          },
          start: 0,
          end: 54,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 3,
              column: 7
            }
          }
        }
      ],
      start: 0,
      end: 54,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 3,
          column: 7
        }
      }
    }
  ],
  [
    'throw``',
    Context.OptionsNext | Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ThrowStatement',
          argument: {
            type: 'TemplateLiteral',
            expressions: [],
            quasis: [
              {
                type: 'TemplateElement',
                value: {
                  cooked: '',
                  raw: ''
                },
                tail: true,
                start: 5,
                end: 7,
                loc: {
                  start: {
                    line: 1,
                    column: 5
                  },
                  end: {
                    line: 1,
                    column: 7
                  }
                }
              }
            ],
            start: 5,
            end: 7,
            loc: {
              start: {
                line: 1,
                column: 5
              },
              end: {
                line: 1,
                column: 7
              }
            }
          },
          start: 0,
          end: 7,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 7
            }
          }
        }
      ],
      start: 0,
      end: 7,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 7
        }
      }
    }
  ],
  [
    `throw foo;`,
    Context.Empty,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ThrowStatement',
          argument: {
            type: 'Identifier',
            name: 'foo'
          }
        }
      ]
    }
  ],
  [
    `throw foo;`,
    Context.OptionsNext | Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ThrowStatement',
          argument: {
            type: 'Identifier',
            name: 'foo',
            start: 6,
            end: 9,
            loc: {
              start: {
                line: 1,
                column: 6
              },
              end: {
                line: 1,
                column: 9
              }
            }
          },
          start: 0,
          end: 10,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 10
            }
          }
        }
      ],
      start: 0,
      end: 10,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 10
        }
      }
    }
  ],
  [
    `throw 12`,
    Context.OptionsNext | Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ThrowStatement',
          argument: {
            type: 'Literal',
            value: 12,
            start: 6,
            end: 8,
            loc: {
              start: {
                line: 1,
                column: 6
              },
              end: {
                line: 1,
                column: 8
              }
            }
          },
          start: 0,
          end: 8,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 8
            }
          }
        }
      ],
      start: 0,
      end: 8,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 8
        }
      }
    }
  ],
  [
    `throw x * y`,
    Context.OptionsNext | Context.OptionsLoc,
    {
      type: 'Program',
      sourceType: 'script',
      body: [
        {
          type: 'ThrowStatement',
          argument: {
            type: 'BinaryExpression',
            left: {
              type: 'Identifier',
              name: 'x',
              start: 6,
              end: 7,
              loc: {
                start: {
                  line: 1,
                  column: 6
                },
                end: {
                  line: 1,
                  column: 7
                }
              }
            },
            right: {
              type: 'Identifier',
              name: 'y',
              start: 10,
              end: 11,
              loc: {
                start: {
                  line: 1,
                  column: 10
                },
                end: {
                  line: 1,
                  column: 11
                }
              }
            },
            operator: '*',
            start: 6,
            end: 11,
            loc: {
              start: {
                line: 1,
                column: 6
              },
              end: {
                line: 1,
                column: 11
              }
            }
          },
          start: 0,
          end: 11,
          loc: {
            start: {
              line: 1,
              column: 0
            },
            end: {
              line: 1,
              column: 11
            }
          }
        }
      ],
      start: 0,
      end: 11,
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 1,
          column: 11
        }
      }
    }
  ]
]);
