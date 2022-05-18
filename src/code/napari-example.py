def __init__(self, parent=None):
    super().__init__(parent)

    self.layout = QVBoxLayout()

    # Description
    title_label = QLabel(
        trans._(
            "<b>napari: a multi-dimensional image viewer for python</b>"
        )
    )
    title_label.setTextInteractionFlags(Qt.TextSelectableByMouse)
    self.layout.addWidget(title_label)

    # Add information
    self.infoTextBox = QTextEdit()
    self.infoTextBox.setTextInteractionFlags(Qt.TextSelectableByMouse)
    self.infoTextBox.setLineWrapMode(QTextEdit.NoWrap)
    # Add text copy button
    self.infoCopyButton = QtCopyToClipboardButton(self.infoTextBox)
    self.info_layout = QHBoxLayout()
    self.info_layout.addWidget(self.infoTextBox, 1)
    self.info_layout.addWidget(self.infoCopyButton, 0, Qt.AlignTop)
    self.info_layout.setAlignment(Qt.AlignTop)
    self.layout.addLayout(self.info_layout)

    self.infoTextBox.setText(sys_info(as_html=True))
    self.infoTextBox.setMinimumSize(
        int(self.infoTextBox.document().size().width() + 19),
        int(min(self.infoTextBox.document().size().height() + 10, 500)),
    )

    self.layout.addWidget(QLabel(trans._('<b>citation information:</b>')))
    self.citationTextBox = QTextEdit(citation_text)
    self.citationTextBox.setFixedHeight(64)
    self.citationCopyButton = QtCopyToClipboardButton(self.citationTextBox)
    self.citation_layout = QHBoxLayout()
    self.citation_layout.addWidget(self.citationTextBox, 1)
    self.citation_layout.addWidget(self.citationCopyButton, 0, Qt.AlignTop)
    self.layout.addLayout(self.citation_layout)

    self.setLayout(self.layout)
